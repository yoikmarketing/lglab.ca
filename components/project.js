import Link from "next/link"

export default function Project({ id, name, description, image, alt, members, tags }) {
  return(
    // <div className="bg-gray-100 m-10 p-20">
    //   <h2>Project Name: {name}</h2>
    //   <h2>Project Description: {description}</h2>
    //   <img 
    //     src={image}
    //     alt={alt}
    //     width={600}
    //     height={400}
    //   />
    //   <div>
    //     <h3>Members working on {name}</h3>
    //     <ul>
    //       {members.map((member) => (
    //         <li key={member.memberId}>{member.name}</li>
    //       ))}
    //     </ul>
    //   </div>
    //   <h4>Project Tags: {tags}</h4>
    // </div>
    <div id={id} className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {name}
            </h2>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-w-10 lg:aspect-h-7">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={image}
                    alt={alt}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <span className="ml-2">{alt}</span>
                </figcaption>
              </figure>
              <div className="mt-4 lg:ml-2">
                <p className="text-gray-500">Members working on this project:</p>
                <div className="mt-1 flex -space-x-2 overflow-hidden">
                  {members.map(member => (
                    <Link key={member.memberId} href={`/team#${member.memberId}`}>
                      <a>
                        <img
                          key={member.id}
                          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                          src={member.image}
                          alt={member.name}
                        />
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget
                pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.
              </p>
              <p>
                Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet
                fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.
              </p>
              <p>
                Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.
              </p>
              <ul>
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul>
              <p>
                Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet
                velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus
                egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

