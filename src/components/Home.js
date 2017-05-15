import React from "react";
import {Link} from 'react-router';
export default class Home extends React.Component {

  render() {
    const styles = this.getStyles();

    return(
      <div style={ styles.wrapper }>
        <div style={ styles.segment }>
          <img
            alt="Design Cards"
            src="https://web.aexp-static.com/Internet/US/Personal/Cardmember/AdditionalProductsAndServices/GiftCardsAndTravelersCheques/Images/bol/shopping/bc-gold-ribbon-small.png"
          />
          <h4>Designs</h4>
          <p>Pre-set amounts from $25-$3000</p>
          <p>Ready to ship in 1 day</p>
          <p>Only one shipping fee per address</p>
          <Link to="/businesscards">
          <button type="button" className="btn btn-primary">Shop Design Cards</button>
          </Link>
        </div>
        <div style={ styles.segment }>
          <img
            alt="Custom Cards"
            src="https://web.aexp-static.com/Internet/US/Personal/Cardmember/AdditionalProductsAndServices/GiftCardsAndTravelersCheques/Images/bol/shopping/bc-gold-gift-box-small.png"
          />
          <h4>Custom Cards</h4>
          <p>Add a message to your card</p>
          <p>Ready to ship in 5-7 day</p>
          <p>Chose a custom amount from $25-$10,000</p>
          <button type="button" className="btn btn-primary">Shop Custom Cards</button>
        </div >
        <div style={ styles.segment }>
          <img
            alt="Custom Cards"
            src="https://web.aexp-static.com/Internet/US/Personal/Cardmember/AdditionalProductsAndServices/GiftCardsAndTravelersCheques/Images/bol/shopping/bc-gold-sparkle-small.png"
          />
          <h4>Options for Business Cards</h4>
          <p>Order in bulk</p>
          <p>Set up a Corporate account</p>
          <p>Add your company logo</p>
          <button type="button" className="btn btn-primary">Learn More</button>
        </div>
      </div>
    );
  }

  getStyles() {
		return {
			segment: {
        flex: "auto"
        , margin: 30
        , textAlign: "Center"
        , color: "gray"
			}
			, wrapper: {
				 backgroundColor: "#f6f6f6"
         , marginTop: 100
         , display: "flex"
         , flexDirection: "row"

			}
		}
	}
}
