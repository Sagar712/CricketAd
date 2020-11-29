import React from 'react';
import './CricketPage.css';


function CricketPage(){
    return(
      
		
	    <div className="maincontent">
		    <div className="leftcol">
			    <h1 className='title'>Now Predict with the power of AI</h1>
				<br/>
				<br/>
			    <p>In friend groups while watching match we use to predict winner by our own information
					which is mostly unstructured in our mind because our mind is more powerful to find solution but it is not expert of 
					mantaining data in mind <br/><br/> Let our tool do this data fetching job more efficiently for you so that you can concentrate on 
					your game ie (match, friendly bets etc).<br/> <br/>Our tool tool uses powerful AI algorythms to predict any scenario with valid reason</p>
		    </div>
        
		    <div className="rightcol">
			    <img src={process.env.PUBLIC_URL + '/cricket.png'} alt="Not VISIBLE" className="imgwe"/>
			     
		    </div>
		
	    </div>
     
    );
};

export default CricketPage;