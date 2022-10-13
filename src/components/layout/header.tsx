import React, { ReactNode } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

type MailtoProps = {
  className: string
  email: string
  subject: string
  body: string
  children: ReactNode
}
const Mailto = ({ className, email, subject, body, children }: MailtoProps) => {
  return (
    <a
      className={className}
      href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}
    >
      {children}
    </a>
  )
}

const Header = () => {
  const { headerData } = useStaticQuery(graphql`
    query {
      headerData: contentfulLayout {
        logo {
          gatsbyImageData
        }
        mobileLogo {
          gatsbyImageData
        }
        contactMail
        contactSubject
        contactBody {
          contactBody
        }
      }
    }
  `)
  return (
    <header>
      <nav className="bg-black py-4">
        <div className="container flex justify-between items-center">
          <Link to="/">
            <GatsbyImage
              image={getImage(headerData?.logo) || headerData?.logo}
              className="hidden md:block"
              alt="Captive Reinsurance Solutions Logo"
            />
            <GatsbyImage
              image={getImage(headerData?.mobileLogo) || headerData?.mobileLogo}
              className="md:hidden"
              alt="Captive Reinsurance Solutions Logo"
            />
          </Link>
          <div className="flex flex-row gap-6">
            <ul className="flex items-center text-white">
              <li>
                <Link className="text-lg" to="/">
                  EN
                </Link>
              </li>
              <li>&nbsp;/&nbsp;</li>
              <li>
                <Link className="text-lg" to="/de/">
                  DE
                </Link>
              </li>
            </ul>
            <Mailto
              className="py-2 px-6 text-white text-lg border-[1px] border-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              email={headerData?.contactMail}
              subject={headerData?.contactSubject}
              body={headerData?.contactBody.contactBody}
            >
              Contact
            </Mailto>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
