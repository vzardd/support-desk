import './home.css';
import Header from './components/Header'
import RaiseTicketSection from './components/RaiseTicketSection';
import RequestFeature from './components/RequestFeature';
import Faq from './components/Faq'
import Footer from './components/Footer';

export default function Home() {
    return (
        <div className="root">
            <Header/>
            <RaiseTicketSection/>
            <RequestFeature/>
            <Faq/>
            <Footer/>
        </div>
    );
}