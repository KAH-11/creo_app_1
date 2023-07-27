const Banner = (props) => {

    const { imagePath , text } = props;

    return ( 
        <>
            <div class="img-overlay-text">
                <img src={imagePath} alt="Pizza" class="image"/>
                <div class="overlay">{text}</div>
            </div>
        </>
     );
}
 
export default Banner;