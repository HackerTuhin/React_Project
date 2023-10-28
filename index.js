
const head=<h1 ClassName='btn btn-danger'>nice</h1>
function Myfun()
{
    let val=77;
    if(val>0)
    {
        return (
        <div>
            <h1>the value is greater then 0</h1>
            <p>{val}</p>
        </div>
        );
    }else if(val<0)
    {
        return (
        <div>
           <h1>the value is less then 0</h1>
            <p>{val}</p>
        </div>
        );
    }
    else{
        return (<div><h1>the value is eual to zero </h1></div>);
    }
}
   

ReactDOM.render(
<div>
    head
    <Myfun />
</div>
, document.getElementById("test"));
