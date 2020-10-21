import React from 'react';
import "./Footer.css";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
		<footer className="vn-footer">
			<div className="container text-center">
				<p className="copyright-info py-2 mt-4">
					&copy; {year} | All Rights Reserved &nbsp;by&nbsp;
					<a href="https://www.linkedin.com/in/shafiq-refat-493272184/" target="_blank">
						<strong>Shafiq Refat</strong>
					</a>
				</p>
			</div>
		</footer>
    );
};

export default Footer;