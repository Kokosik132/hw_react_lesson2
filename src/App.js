import {Cats, Dogs, FormCat, FormDog} from "./components";

function App() {
  return (
    <div>
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <div>
                <div style={{display: "flex"}}>
                    AddCat:<FormCat/>
                </div>
                <Cats/>
            </div>
            <div>
                <div style={{display: "flex"}}>
                    AddDog:<FormDog/>
                </div>
                <Dogs/>
            </div>
        </div>

    </div>
  );
}

export default App;
