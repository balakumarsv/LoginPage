import "bootstrap/dist/css/bootstrap.min.css";
import "./Bootstrap.css";
function Bootstrap() {
  return (
    <>
      <div className="container-sm maindiv">
        <button className="btn btn-primary">Button</button>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col subdiv">
            <h1>Hloo</h1>
          </div>
          <div className="col subdiv">
            <h1>Hii</h1>
          </div>
        </div>
        <div className="row maindiv">
          <div className="col subdiv">
            <h1>Hii</h1>
          </div>
          <div className="col-5  bg-success subdiv">
            {/* <h1>Hloo</h1> */}
            <img className=" mx-auto d-block" src="https://tse1.mm.bing.net/th?id=OIP.G37tgeQqSNt7v2oPfj9ltQHaE7&pid=Api&rs=1&c=1&qlt=95&w=138&h=91" alt="" />
          </div>
          <div className="col subdiv">
            <h1>Hii</h1>
          </div>
        </div>
      </div>
      
    </>
  );
}
export default Bootstrap;
