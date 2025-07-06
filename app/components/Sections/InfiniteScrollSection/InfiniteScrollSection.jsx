"use client"
import ScrollVelocity from "../../reactBits/ScrollVelocity/ScrollVelocity";
const InfiniteScrollSection = ()=>{
    const velocity = 100;
    return(

        <div className="bg-black  ">
                  <ScrollVelocity
                    texts={[
                      '"Start Up" "Working prototype completed"',
                      '"Iterating product based on real user insights"',
                    ]}
                    velocity={velocity}
                    className="custom-scroll-text"
                  />
                </div>
    );
}

export default InfiniteScrollSection;