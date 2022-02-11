const OurCoreValues = () => {
    return (
        <div className="md:mx-44 mt-12">
            <div className="flex flex-row justify-center">
                <div className="w-1/4 text-f16 Inter-Regular">
                    <p>Our core values </p>
                </div>
                <div className="w-3/4 text-f24 Inter-Regular">

                    <div className="grid grid-cols-1 gap-y-10">

                        <div className="flex">
                            <div>
                                <div><img className="w-96 h-56 object-cover" src="/Resources/About/value-1.jpg" alt="value-1" /></div>
                                <div><p className="text-f24 text-left">Be empathetic</p></div>
                            </div>

                            <div>
                                <div><img className="w-96 h-56 object-cover" src="/Resources/About/value-2.jpg" alt="value-2" /></div>
                                <div><p className="text-f24 text-left">Build solutions, not websites</p></div>
                            </div>
                        </div>

                        <div className="flex">

                            <div>
                                <div><img className="w-96 h-56 object-cover" src="/Resources/About/value-3.jpg" alt="value-3" /></div>
                                <div><p className="text-f24 text-left">Over deliver, always</p></div>
                            </div>
                            <div>
                                <div><img className="w-96 h-56 object-cover" src="/Resources/About/value-4.jpg" alt="value-4" /></div>
                                <div><p className="text-f24 text-left">Seek learning and growth</p></div>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <div><img className="w-96 h-56 object-cover" src="/Resources/About/value-5.jpg" alt="value-5" /></div>
                                <div><p className="text-f24 text-left">Build a family, not a team</p></div>
                            </div>
                            <div>
                                <div><img className="w-96 h-56 object-cover" src="/Resources/About/value-6.jpg" alt="value-6" /></div>
                                <div><p className="text-f24 text-left">Choose honesty over white lies</p></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default OurCoreValues;
