import { BsFillStarFill } from "react-icons/bs";
import StartingPage from "../CSSfile/StartingPage.module.css";


const Famousity = () => {
    return (
        <div className='px-2 lg:px-32 md:px-24'>
            <div className='justify-between hidden mb-24 lg:flex md:flex'>
                <h1 className='text-4xl font-bold'>Loved by many <br /> <span style={{color: '#0F7FEF'}}>Worldwide</span></h1>

                <img src="https://live.staticflickr.com/65535/52966728727_f3c81aa50b_m.jpg" alt="" />
                
                <p>See what our over 1 million users are <br /> saying about the product</p>
            </div>

            {/* For mobile */}
            <div className={`block mb-24 lg:hidden md:hidden ${StartingPage.mobileWorldwide}`}>
                <h1 className='flex justify-center mb-6 text-2xl font-bold'>Loved by many <span style={{color: '#0F7FEF'}} className="ml-2">Worldwide</span></h1>

                <p className="flex justify-center">See what our over 1 million users are <br /> saying about the product</p>
            </div>

            <div className='pb-24'>
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2'>
                    <div className={`${StartingPage.userReview} py-12 pl-8 pr-12`}>
                        <div className='flex gap-x-6'>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                        </div>
                        <p className='my-8'>“ Do not let your ad money go to waste by optimizing your campaigns manually. Create workflows “</p>
                        <div className='flex items-center'>
                            <img style={{border: '0.852521px solid #0F7FEF', borderRadius: '50%'}} className='p-2' src="https://live.staticflickr.com/65535/52966799967_aabaab6040_m.jpg" alt="" />
                            <div className='ml-4'>
                                <h1 className='text-2xl font-bold'>Eve Porcilo</h1>
                                <p>Engineer & Author</p>
                            </div>
                        </div>
                    </div> 
                    {/* userReviewWithColor */}

                    <div className={`${StartingPage.userReview} py-12 pl-8 pr-12 `}>
                        <div className='flex gap-x-6'>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                        </div>
                        <p className='my-8'>“ Do not let your ad money go to waste by optimizing your campaigns manually. Create workflows, instant working with raw pictures and comes to an amazing result. Fastest and very easy to use.“ </p>
                        <div className='flex items-center'>
                            <img style={{border: '0.852521px solid #FFFFFF', borderRadius: '50%'}} className='p-2' src="https://live.staticflickr.com/65535/52966799967_aabaab6040_m.jpg" alt="" />
                            <div className='ml-4'>
                                <h1 className='text-2xl font-bold'>Eve Porcilo</h1>
                                <p>Engineer & Author</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className={`${StartingPage.userReview} py-12 pl-8 pr-12 lg:mb-[-70px] md:mb-[-50]`}>
                        <div className='flex gap-x-6'>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                        </div>
                        <p style={{color:'white'}} className='my-8'>“ Do not let your ad money go to waste by optimizing your campaigns manually. Create workflows, instant working with raw pictures and comes to an amazing result. Fastest and very easy to use.“ </p>
                        <div className='flex items-center'>
                            <img style={{border: '0.852521px solid #FFFFFF', borderRadius: '50%'}} className='p-2' src="https://live.staticflickr.com/65535/52966799967_aabaab6040_m.jpg" alt="" />
                            <div className='ml-4'>
                                <h1 style={{color:'white'}} className='text-2xl font-bold'>Eve Porcilo</h1>
                                <p style={{color: 'white'}}>Engineer & Author</p>
                            </div>
                        </div>
                    </div> */}


                    <div className={`${StartingPage.userReview} py-12 pl-8 pr-12`}>
                        <div className='flex gap-x-6'>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                        </div>
                        <p className='my-8'>“ Do not let your ad money go to waste by optimizing your campaigns manually. Create workflows “</p>
                        <div className='flex items-center'>
                            <img style={{border: '0.852521px solid #0F7FEF', borderRadius: '50%'}} className='p-2' src="https://live.staticflickr.com/65535/52966799967_aabaab6040_m.jpg" alt="" />
                            <div className='ml-4'>
                                <h1 className='text-2xl font-bold'>Eve Porcilo</h1>
                                <p>Engineer & Author</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${StartingPage.userReview} py-12 pl-8 pr-12`}>
                        <div className='flex gap-x-6'>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                        </div>
                        <p className='my-8'>“ Do not let your ad money go to waste by optimizing your campaigns manually. Create workflows “</p>
                        <div className='flex items-center'>
                            <img style={{border: '0.852521px solid #0F7FEF', borderRadius: '50%'}} className='p-2' src="https://live.staticflickr.com/65535/52966799967_aabaab6040_m.jpg" alt="" />
                            <div className='ml-4'>
                                <h1 className='text-2xl font-bold'>Eve Porcilo</h1>
                                <p>Engineer & Author</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${StartingPage.userReview} py-12 pl-8 pr-12 `}>
                        <div className='flex gap-x-6'>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                        </div>
                        <p className='my-8'>“ Do not let your ad money go to waste by optimizing your campaigns manually. Create workflows “</p>
                        <div className='flex items-center'>
                            <img style={{border: '0.852521px solid #0F7FEF', borderRadius: '50%'}} className='p-2' src="https://live.staticflickr.com/65535/52966799967_aabaab6040_m.jpg" alt="" />
                            <div className='ml-4'>
                                <h1 className='text-2xl font-bold'>Eve Porcilo</h1>
                                <p>Engineer & Author</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${StartingPage.userReview} py-12 pl-8 pr-12`}>
                        <div className='flex gap-x-6'>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                            <span style={{color: '#FFDF00'}}><BsFillStarFill size={30}></BsFillStarFill></span>
                        </div>
                        <p className='my-8'>“ Do not let your ad money go to waste by optimizing your campaigns manually. Create workflows “</p>
                        <div className='flex items-center'>
                            <img style={{border: '0.852521px solid #0F7FEF', borderRadius: '50%'}} className='p-2' src="https://live.staticflickr.com/65535/52966799967_aabaab6040_m.jpg" alt="" />
                            <div className='ml-4'>
                                <h1 className='text-2xl font-bold'>Eve Porcilo</h1>
                                <p>Engineer & Author</p>
                            </div>
                        </div>
                    </div>
                    {/* lg:mb-[-70px] md:mb-[-50] */}
                    {/* mt-[70px] mb-[-70px] */}

                </div>
            </div>
        </div>
    );
};

export default Famousity;