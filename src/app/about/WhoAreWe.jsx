const WhoAreWe = () => {
  return (
    <>
      <section className="flex items-center justify-center py-8 lg:py-12">
        <section className="container flex items-center justify-center">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start lg:items-start justify-between w-full space-y-8 md:space-y-0">
            {/* Left Side - Button */}
            <div className="max-w-4xl flex-shrink-0 md:mr-12">
              <button className="text-xl md:mb-44 px-5 py-3  border-2 border-brownColor rounded-full text-black  shadow-sm  transition-all duration-300 ease-in-out font-bold">
                Who we are
              </button>
            </div>

            {/* Right Side - Content */}
            <div className="max-w-4xl text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
                Unveiling the essence of our company
              </h1>
              <p className="py-4 text-gray-900 text-md mb-4 leading-relaxed">
                We aspire to become global leaders in helping businesses adopt
                futuristic technologies and automate their workplaces. We
                understand the client’s business end-to-end and identify the
                sectors and processes that can be automated. With our endless
                innovative mindset, we believe in becoming an essential part of
                the client’s team and constantly look for connecting the dots
                with data. <br/><br/> We have a series of different engagement models
                providing the best of services as per the client’s needs. These
                models can also be customized for specific project needs,
                allowing the client to manage the project risks effectively. <br/><br/>  We
                also collaborate with leading PaaS providers and industry forums
                for continuous research and advancements in Artificial
                Intelligence, Data Engineering and Salesforce with an aim of
                understanding technology directions as well as new areas to
                which such future defining technologies can be implemented.
              </p>
             
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default WhoAreWe;
