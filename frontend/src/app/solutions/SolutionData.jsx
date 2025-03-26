
const WhoAreWe = () => {
    return (
      <>
        <section className="flex items-center justify-center py-8 lg:py-12">
          <section className="container flex items-center justify-center">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start lg:items-start justify-between w-full space-y-8 md:space-y-0">
              {/* Left Side - Button */}
              <div className="max-w-4xl flex-shrink-0 md:mr-12">
                <button className="text-xl md:mb-44 px-5 py-3  border-2 border-brownColor rounded-full text-black  shadow-sm  transition-all duration-300 ease-in-out font-bold">
                  Solutions
                </button>
              </div>
  
              {/* Right Side - Content */}
              <div className="max-w-4xl text-center md:text-left">

              <p className="py-4 text-gray-900 text-lg mb-4 leading-relaxed">
                We offer enterprise solutions which would help them to address niche problem statements and provide necessary flexibility to integrate the solutions into their IT portfolio with due considerations of data privacy, security and compliance.
                </p>

                <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
                Salesforce Solutions:    </h1>
               
               

                <img src="/assets/SolutionSalesforceIMG.jpg"
                className="py-5 h-96"
                />

                <h1 className="text-xl md:text-3xl font-bold text-black py-4 pt-5 leading-tight">
                KNOW-WOC   </h1>
        

        <h2 className="text-lg md:text-2xl font-bold text-black py-4 leading-tight">Understand current feedback to bring more value for future</h2>

        <p className="py-4 text-gray-900 text-md mb-4 leading-relaxed">Get to know customer feedback in analytical way is more important in a very dynamic and competitive world. More you get feedback from customer, better you can improve about Sales and product to give more value back to the existing and future customers.</p>
              </div>
            </div>
          </section>
        </section>
      </>
    );
  };
  
  export default WhoAreWe;
  