import { FaFacebook, FaInstagram, FaPinterest, FaTelegram, FaTiktok } from 'react-icons/fa';
import { footerLinks } from '../../constants/footerData';
import './Footer.css';

function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-top">
				<h1>JOIN THE CROSSOVER</h1>
				<p>Be the first to hear about new drops, exclusive sales and more.</p>
				<div className="flex h-[34px] text-[14px] text-white/60">
					<div className="input-container">
						<input
							className="email-input"
							name="text"
							type="text"
							placeholder="Email"
						/>
						<button
							className="send-button"
						>
							Send
						</button>
					</div>
				</div>
			</div>
			<div className="footer-links">
				<div>
					<h3>About us</h3>
					<p>Crossover is the techwear official store for cutting-edge, 
						functional fashion that seamlessly blends urban style with 
						high-performance materials.</p>
				</div>
				<div>
					<h3>Help</h3>
					<ul>
						{/* <li>Sitemap</li>
						<li>Blog</li>
						<li>Track your parcel</li>
						<li>FAQ</li>
						<li>Contact us</li>
						<li>Reviews</li> */}
							{footerLinks.help.map((help, index) => (
							<li key={index}>{help}</li>
						))}
					</ul>
				</div>
				<div>
					<h3>Information</h3>
					<ul>
						<ul>
							{footerLinks.information.map((information, index) => (
							<li key={index}>{information}</li>
						))}
					</ul>
					</ul>
				</div>
				<div>
					<h3>Resource</h3>
					<ul>
							{footerLinks.resource.map((resource, index) => (
							<li key={index}>{resource}</li>
						))}
					</ul>
				</div>
			</div>
			<div className="footer-bottom">
				<p>© 2024|All Rights Reserved</p>
				<div className="social-icons">
					<a href="#" className="social-icon">
						<FaFacebook />
					</a>
					<a href="#" className="social-icon">
						<FaInstagram />
					</a>
					<a href="#" className="social-icon">
						<FaTelegram />
					</a>
					<a href="#" className="social-icon">
						<FaTiktok />
					</a>
					<a href="#" className="social-icon">
						<FaPinterest />
					</a>
				</div>
				
			</div>
		</div>
	);
}

export default Footer;
