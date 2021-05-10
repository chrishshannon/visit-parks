import React from 'react';

const Footer = (props) => {
    const { parkData } = props;
    return (
        <footer className="footer">
            <div>
                <h3>Contacts for the park</h3>
                {
                (parkData && parkData.data.length) ? 
                    <div>
                        <div className="mt-2">
                            {parkData.data[0].contacts.emailAddresses.map((email, ind) => {
                                return (
                                    <p className="footer-text-color" key={ind}>Email: {email.emailAddress}</p>
                                );
                            })}
                        </div>
                        <div className="mt-2">
                            {parkData.data[0].contacts.phoneNumbers.map((phone, ind) => {
                                return (
                                    <div key={ind}>
                                        <p className="footer-text-color mt-3">Phone: {phone.phoneNumber}</p>
                                        {phone.extension && <p className="footer-text-color">Extension: {phone.extension}</p>}
                                        <p className="footer-text-color">Type: {phone.type}</p>  
                                    </div>
                                    
                                );
                            })}
                        </div>
                    </div> 
                    : 
                    <p className="footer-text-color">Select a park please.</p>
                }    
            </div>
            <p className="footer-text-color">Copyright {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;