const CaseStudy = () => {
    return (
         <div className="mx-2">

            <div><h1 className="text-f50 Inter-Regular text-center">Case Study</h1></div>

           <div className="mt-8 grid grid-cols-3">
                <div>
                     <img className="object-cover w-full h-72" src="/Resources/Home/case-1.jpg" alt="case-1" />
                     <p className="mt-2 text-center text-f24 Inter-Regular text-gray-700">Lightin Interiors</p> 
                </div>
                <div>
                     <img className="object-cover w-full h-72" src="/Resources/Home/case-2.jpg" alt="case-1" />
                     <p  className="mt-2 text-center text-f24 Inter-Regular text-gray-700">Flexy Archi</p> 
                </div>
                <div>
                     <img className="object-cover w-full h-72" src="/Resources/Home/case-3.jpg" alt="case-1" />
                     <p className="mt-2 text-center text-f24 Inter-Regular text-gray-700">Bloom Beauty</p> 
                </div>
          </div>



        </div>
    )
}

export default CaseStudy;
