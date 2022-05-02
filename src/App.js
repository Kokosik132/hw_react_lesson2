import {Cats, Dogs, FormCat, FormDog} from "./components";

function App() {
    return (
        <div>
            <div className={'flex'}>
                <FormCat/>
                <FormDog/>
            </div>
            <hr/>

            <div className={'flex'}>
                <Cats/>
                <Dogs/>
            </div>

        </div>
    );
}

export default App;
