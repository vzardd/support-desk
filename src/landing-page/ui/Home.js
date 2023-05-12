import './home.css';
import Header from './components/Header'
import RaiseTicketSection from './components/RaiseTicketSection';
import RequestFeature from './components/RequestFeature';
import Faq from './components/Faq'

export default function Home() {
    return (
        <div className="root">
            <Header/>
            <RaiseTicketSection/>
            <RequestFeature/>
            <Faq/>
        </div>
    );
}