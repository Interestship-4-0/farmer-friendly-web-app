import './service.css';
function Services(){
    let services=require("../../service/service.json");
    return(
        <>
        <div id="SERVICES">
            <h1>SERVICES</h1>
            <p>Sustainability bridge</p>
             <div className='services'>
            {
                services.map((item)=>(
                   
                    <div key={item.id} className='service'>
                        <div className='image'><img src={item.imageLink} alt="loading.."/></div>
                        <div className='heading'><h1>{item.heading}</h1></div>
                        <div className='subheading'><p>{item.subheading}</p></div>
                    </div>
                   
                ))
            }
            </div>
        </div>
        </>
    )
}
export default Services;