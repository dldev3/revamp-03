const CaseStudy = () => {
     return (
          <div className="lg:mx-2">

               <div><h1 className="text-f25 lg:text-f50 Inter-Regular text-center">Case Study</h1></div>

               <div className="mt-8 grid lg:grid-cols-3 grid-cols-1">
                    <div>
                         <img className="object-cover w-full lg:h-72 h-auto" src="/Resources/Home/case-1.jpg" alt="case-1" />
                         <p className="hidden lg:block mt-2 text-center text-f24 Inter-Regular text-gray-700">Lightin Interiors</p>
                    </div>
                    <div>
                         <img className="object-cover w-full lg:h-72 h-auto" src="/Resources/Home/case-2.jpg" alt="case-1" />
                         <p className="hidden lg:block mt-2 text-center text-f24 Inter-Regular text-gray-700">Flexy Archi</p>
                    </div>
                    <div>
                         <img className="object-cover w-full lg:h-72 h-auto" src="/Resources/Home/case-3.jpg" alt="case-1" />
                         <p className="hidden lg:block mt-2 text-center text-f24 Inter-Regular text-gray-700">Bloom Beauty</p>
                    </div>
               </div>



          </div>
     )
}

export default CaseStudy;
