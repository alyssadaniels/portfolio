import ExternalLink from "./components/ExternalLink";
import ListSection from "./components/ListSection";

function App() {
    return (
        <div className="min-h-screen overflow-clip bg-gray-50 p-4 text-lime-900">
            <ListSection title="Alyssa Daniels / SWE @ Stripe" />
            <br />
            <ListSection title="Education" >
                <div>University of Illinois at Urbana-Champaign</div>
                <div>B.S. Mathematics and Computer Science</div>
            </ListSection>
            <br />
            <ListSection title="Links">
                <ExternalLink url="https://www.linkedin.com/in/alyssasdaniels/" text="LinkedIn"/>
                <ExternalLink url="https://axodan.itch.io/" text="itch.io" />
                <ExternalLink url="https://github.com/alyssadaniels" text="GitHub" />
            </ListSection>
        </div>
    );
}

export default App;
