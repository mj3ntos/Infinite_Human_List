import React, {Suspense, useEffect, useState} from "react";
import SinglePerson from "./SinglePerson";
import LazyLoad from 'react-lazyload';

let counter = 0;
const MoreAndMorePeople = ({ items }) =>{
    const [object, objectUpdate] = useState(items.map((items, index) =>
            index + counter < 10 + counter &&
            (
                <SinglePerson
                    key={index}
                    index={index}
                    fname={items.personName}
                    sname={items.personSecoundName}
                    gender={items.personGender}
                />
            ))
    );



    const MoreAndMore = () => {
        counter+=10;
        objectUpdate(
            items.map((items, index) =>
                index < 10 + counter &&
                (
                    <SinglePerson
                        key={index}
                        fname={items.personName}
                        sname={items.personSecoundName}
                        gender={items.personGender}
                    />
                )
            )
        )

    }

    // const LazyComponent = React.lazy(MoreAndMore);


    return(
        <div>
            {object}
            {
                useEffect(() =>{
                    const scroll = () =>{
                        window.addEventListener("scroll", MoreAndMore)
                    }
                    scroll();
                    return(
                        window.removeEventListener("scroll", MoreAndMore)
                    )
                })
            }
            {/*<LazyLoad>*/}
            {/*    {MoreAndMore()}*/}
            {/*</LazyLoad>*/}


        {/*<Suspense fallback={<div>Loading...</div>}>*/}
        {/*    <section>*/}
        {/*        <LazyComponent />*/}
        {/*    </section>*/}
        {/*</Suspense>*/}

        </div>
    );
};

export default MoreAndMorePeople;