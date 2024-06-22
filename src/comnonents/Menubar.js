import React from 'react'
import ayodhya from './ayodhya.jpeg';
import ajanta from './ajanta.jpg';
import banaras from './banaras.jpg';
import hitkre from './hitkcampus.jpeg';
import kolkata from './kolkatacityofjoy.jpeg';
import delhi from './delhi.jpg';
import kedarnath from './kedarnath.jpg';
import kanya from './kanyakumari.jpeg';
import kashmir from './kashmir.jpeg';
import kutch from './kutch.jpeg';
import ladakh from './ladakh.jpeg';
import sikkim from './sikkim.jpg';
import lakhadeep from './lakshadeep.jpeg';
import darji from './dargi.jpeg';
import goa from './goa.jpeg';
import sundar from './sundar.jpg';
import jim from './jim.jpeg';
import andaman from './andanman.jpeg';
import manali from './manali.jpeg';
import puri from './puri.jpeg';




const TravelItem = ({ image, title, catagory, price, comment }) => {
    return (
    <div className="tour-available">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{catagory}</p>
    <p>Price: Rs. {price}</p>
    <button>{comment}</button>
    </div>
    );
};

const Menubar = () => {

    const travelItems = [

        {
            image: ayodhya,
            tittle: 'Ayodhya',
            catagory: 'Holy',
            price: '15000',
            comment: 'Book Now'
        },
        {
            image: ajanta,
            tittle: 'Ajanta & ellora',
            catagory: 'Historic',
            price: '9000',
            comment: 'Book Now'
        },
        {
            image: banaras,
            tittle: 'Banaras',
            catagory: 'Holy',
            price: '18000',
            comment: 'Book Now'
        },
        {
            image: darji,
            tittle: 'Darjeeling',
            catagory: 'Hillstation',
            price: '16000',
            comment: 'Book Now'
        },
        {
            image: delhi,
            tittle: 'Nations Capital New Delhi',
            catagory: 'City Tour',
            price: '13000',
            comment: 'Book Now'
        },
        {
            image: kolkata,
            tittle: 'Calcatta The city of Joy',
            catagory: 'City Tour',
            price: '5000',
            comment: 'Book Now'
        },
        {
            image: kedarnath,
            tittle: 'Kedarnath',
            catagory: 'Holy',
            price: '25000',
            comment: 'Book Now'
        },
        
        {
            image: kashmir,
            tittle: 'Kashmir',
            catagory: 'cool weather',
            price: '30000',
            comment: 'Book Now'
        },
        {
            image: kanya,
            tittle: 'Kanyakumari',
            catagory: 'Sea Beach',
            price: '12500',
            comment: 'Book Now'
        },
        {
            image: jim,
            tittle: 'Jim Corbett National Park',
            catagory: 'Forest Saffari',
            price: '9000',
            comment: 'Book Now'
        },
        {
            image: sundar,
            tittle: 'Sundarban',
            catagory: 'Forest saffari',
            price: '7000',
            comment: 'Book Now'
        },
         
        {
            image: hitkre,
            tittle: 'Heritage Campus',
            catagory: 'College campus',
            price: '10',
            comment: 'Book Now'
        },
        {
            image: andaman,
            tittle: 'Andamban & Nicobar Islands',
            catagory: 'Sea Beach',
            price: '38000',
            comment: 'Book Now'
        },
        {
            image: lakhadeep,
            tittle: 'Lakshadweep',
            catagory: 'Sea Beach',
            price: '40000',
            comment: 'Book Now'
        },
        {
            image: sikkim,
            tittle: 'Sikkim',
            catagory: 'cool weather',
            price: '30000',
            comment: 'Book Now'
        },
     
        {
            image: goa,
            tittle: 'Goa',
            catagory: 'Sea Beach',
            price: '9000',
            comment: 'Book Now'
        },
        {
            image: kutch,
            tittle: 'Kutch of Gujarat',
            catagory: 'Desert',
            price: '8000',
            comment: 'Book Now'
        },
        {
            image: puri,
            tittle: 'Jai Jagannath',
            catagory: 'Holy',
            price: '10000',
            comment: 'Book Now'
        },
        {
            image: ladakh,
            tittle: 'Ladakh',
            catagory: 'cool weather',
            price: '20000',
            comment: 'Book Now'
        },
        {
            image: manali,
            tittle: 'Manali',
            catagory: 'Mountains',
            price: '33000',
            comment: 'Book Now'
        }
     
    ];



        return (
            <div className="tour-menu">
            
            <div className="our-tour-items">
            {travelItems.map((item, index) => (
                <TravelItem
                key={index}
                image={item.image}
                title={item.tittle}
                catagory={item.catagory}
                price={item.price}
                comment={item.comment}/>
        ))}
        </div>
        </div>
);
};

export default Menubar






