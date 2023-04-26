import React from "react"

function WhatsInOurHands() {
  const icons = [
    "https://s3-alpha-sig.figma.com/img/b7f5/b79a/e9f52a39dd472f026a19ae821b58bc83?Expires=1683504000&Signature=HkVIWJswa8qnlPymyjsmBdktHxRyXrf1MAOYyr6m7XjMmbSJsuei~kInls5renj~YdIpU7VtsIDmwup1knX50~R5kV-UHPQINXBQZNR-aU2Xx6Dx96fxVugdxcgFDNBypXpGOU2AsLThARcCYdQzEcu63tAru07jyzagTBMFXhIMga5NwVILZa57ZqfHcDsrF7Hoeuctswg~Emh~4HYtaADqF-~doabNFNXkpnHC28ofpvWqVoyCS9D19JzgSXcCI0wedzaaWA8el7t~kgjb8WrGSC20NvaiJFc4ryfOqPRhHuD4McECRasLYZDC8Q2-o3tMkXtz0SmVTy47MaTmBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/2efa/4e07/a2d9aca78579a636c8b01d26c9598fe5?Expires=1683504000&Signature=BTCo2QoJSp3Gotl~flXhLTH-eoyNM9d6Jp9ZH1KGZV2zP29yJEkRVp5wjjdmm3X4Gyzfc3zYF3JrdISsJhUmpMs8wjyGEH50UqlO0MMadUd9Byza-JPEjFo6XM3YOOzxmby8tni~CYlqJqiwwwSxyeXmH3EMYumpOmvgO0EpkqC~qdYOXcQTvDJ0BebDpn3sbXIx~FL3nahjI6ZLu9HPDmi-IEaD74NmC586FqpY-TVwb2bBPcO7dE7MIBBKtisMEa9-oJ9Hj1Pk80vLLXkqUwR9x67javzD2zLRtVZa6O2noPd1pMoomkabGm8nso8uZv1gMYkpOvVfAg25qZ1OXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/b5d2/7628/46be5b3884b9ad65e747891b94a85297?Expires=1683504000&Signature=VZ0mKXxVp8FTF6xht4gdVri~sgnzRpKMTjWKI9~fsJvKRVsd~Xb9vK-XZ-QGRCeKfmqz61Ae9LKcXidnCu1GjbrhKfqeCI711iJedFohaW4hllmnV3zta9jZ8cEXjVZjJwUPC~UwYj8mVWnSqMFJCYlawldu2nsoEicWzO0rLHT8JQTNFM0FnJka2csW8ZC-y4M4HdmIBdEKkG5z2QaMXHx0hKX1ktJy0eksdqssbzGDK3HXYJKDDmqyh9pmWqnuc7ulyZXnFttNTV4fO~kYFdWHpEAFp4HbqJBdPVnN4ugmm3z7fXJqd4c59KFK9aMsr~9z5T52L95-MEcHBBrTxw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/cbfe/f2c1/e9159b6d4c49106b312cc70d0914ac9a?Expires=1683504000&Signature=XDK5Cyig2ycPumX95jjwThrdzxBJv3UG1MEckrnQr6yFKiebFP1En-LFHSPhKX2oM8QBQZl-dNJ~LmXBv5pIQClhRkjfnrXlcj23QW~bxqhSAgUe-ApGpfufHr5cpDxD-LGBlAMC1RLQoVXT1VlTdtxjKZfWvFoQfdbTt~3jjhrP9qaSTnRxSW0bx6u8c8-KZdUOq0DZA6c7JcA687hp5I~TWrJM-EURFLI0HRE-SwAbEoSLtKpi9vgmi4SN8eMlqKk0Gfk-yGTU9rE-gl5-ihfDkYnQuipkhgVI9MiL-QfVnr~-u~YHHCj-CCHunHbmLH0qBblYoRrINQp~jaB19g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  ]

  return (
    <section
      id="landing-wioh"
      className="bg-light w-screen h-[calc(100vh-4rem)] p-8 flex flex-col items-center text-center justify-evenly max-[320px]:p-4"
    >
      <p className="text-grey-2 font-light text-4xl px-2 sm:text-5xl md:text-6xl">
        What's in Our Hands?
      </p>

      <div className="grid grid-cols-2 gap-16 md:gap-32 lg:grid-flow-row lg:grid-cols-4 xl:gap-24 max-[320px]:gap-8">
        {icons.map((icon, i) => (
          <div
            key={i}
            className="group bg-grey-2 p-4 flex justify-center items-center w-32 h-32 hover:bg-opacity-0 duration-300 ease-out cursor-help sm:w-40 sm:h-40 md:w-44 md:h-44 xl:w-48 xl:h-48 max-[320px]:w-24 max-[320px]:h-24"
          >
            <img
              alt={"icon" + (i + 1)}
              src={icon}
              className="w-full h-full group-hover:hidden duration-300 ease-out"
            />

            <p className="text-grey-2 font-semibold text-lg hidden group-hover:block duration-300 ease-out sm:text-xl lg:text-2xl xl:text-4xl">
              Untitled
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhatsInOurHands
