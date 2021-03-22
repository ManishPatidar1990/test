import React from 'react';
import $ from 'jquery';
import { ContextConsumer } from "./ExampleTwo";
import { ContextProvider } from "./ExampleTwo"

function MyForm(props) {
    return (
        <ContextProvider>
            <ContextConsumer>
                {context => (
                <div className="container">
                    <form>
                        <div className="form-group"><h5><label for="amount">Number One:</label></h5>
                            <input className="form-control" type="number" id="numberone" placeholder="Enter Number One" />
                        </div>
                        <div className="form-group"><h5><label for="rate">Number Two:</label></h5>
                            <input className="form-control" type="number" id="numbertwo" placeholder="Enter Number Two" />
                        </div>
                    </form>
                    { context.add ? <div>Addition is: {context.add}</div> : "" }
                    { context.sub ? <div>Subtractions is: {context.sub}</div> : "" }
                    { context.mul ? <div>Multiplication is: {context.mul}</div> : "" }
                    { context.div ? <div>Division is: {context.div}</div> : "" }
                    <button className="btn btn-primary" onClick={() => context.calculate(parseInt($('#numberone').val()),parseInt($('#numbertwo').val()), "add")}>Addition</button>{" "}
                    <button className="btn btn-primary" onClick={() => context.calculate(parseInt($('#numberone').val()),parseInt($('#numbertwo').val()), "sub")}>Subtractions</button>{" "}
                    <button className="btn btn-primary" onClick={() => context.calculate(parseInt($('#numberone').val()),parseInt($('#numbertwo').val()), "mul")}>Multiplication</button>{" "}
                    <button className="btn btn-primary" onClick={() => context.calculate(parseInt($('#numberone').val()),parseInt($('#numbertwo').val()), "div")}>Division</button><br/><br/><br/>
                    <button><a href="/">Back</a></button> 
                </div>        
                )}
            </ContextConsumer>
        </ContextProvider>
    );
}

export default MyForm;