import ImgOverText from "../Components/ImgOverText";
import ConsultStock from "../Components/ConsultStock";
import ConsultFournisseur from "../Components/ConsultFournisseur";
import ConsultDemande from "../Components/ConsultDemande";

export const Home = () => {
    return (
    <>
        <h1>Home Page</h1>
        <ConsultDemande />
        <ConsultStock />
        <ConsultFournisseur />
        <ImgOverText />
    </>
    )
}