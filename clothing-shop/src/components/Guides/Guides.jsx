import './Guides.css';
import warcoreImage from './images/WARCORE.jfif';
import dystopianFashionImage from './images/DYSTOPIAN_FASHION.webp';
import gorpcoreImage from './images/what-is-gorpcore.webp';
import { Fab } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Guides = () => {
    return (
        <div className="guides-container">
            <h2>Techwear Guide</h2>
            <div className="card-container">
                <div className="card">
                    <img src={dystopianFashionImage} alt="Dystopian Fashion" className="card-image" />
                    <h3>What is Dystopian Fashion?</h3>
                    <p>Explore how dystopian fashion merges functionality with futuristic aesthetics, reflecting survival and resistance in a changing world.</p>
                </div>
                <div className="card">
                    <img src={warcoreImage} alt="Warcore" className="card-image" />
                    <h3>Warcore</h3>
                    <p>Discover the bold Warcore style—where military aesthetics meet urban fashion for a rugged, street-ready look.</p>
                </div>
                <div className="card">
                    <img src={gorpcoreImage} alt="Gorpcore" className="card-image" />
                    <h3>What is Gorpcore?</h3>
                    <p>Gorpcore is a style that embraces outdoor and utilitarian aesthetics, blending functionality with fashion.</p>
                </div>
            </div>
            <div className="center-button">
							<Fab variant="extended" className="view-all" style={{ marginTop: '1rem' }}>
                View all <ArrowForwardIcon />
            </Fab>
						</div>
        </div>
    );
};

export default Guides; 