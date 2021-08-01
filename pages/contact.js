import { HiPhone, HiOfficeBuilding } from "react-icons/hi"
import Content from "@components/content"
import Heading from "@components/heading"

export default function Contact() {
  return (
    <Content>
      <Heading
        title="The Gunaratnam Lab – Contact "
        lead="Interested in learning more? Contact us by email!"
      />
      <div className="bg-white">
        <div className="max-w-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div>
            <div>
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <HiPhone
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+1 (519) 663 3632</p>
                    <p className="mt-1">Extension 34581</p>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <HiOfficeBuilding
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <address className="not-italic">
                      Room A10-208
                      <br />
                      University Hospital
                      <br />
                      339 Windermere Road
                      <br />
                      London, ON N6A 5A5
                      <br />
                      Canada
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  )
}
