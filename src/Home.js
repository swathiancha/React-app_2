import React from 'react'
 import "./App.css";
//  import ReactPlayer from "react-player"

//  import {useHistory} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';

const Home = () => {
// let history=useNavigate();

  return (
    <div className="body">
      <center> 
      {/* <ReactPlayer url='https://www.youtube.com/watch?v=1Yg9latVnak'/>  */}
      <img  style={{width:"100%",height:"50%"}} src="https://www.peertechzpublications.com/images/HEADERS/international-journal-of-veterinary-science-and-research.png" alt='load failed'/><br/><br/>
      <h1 style={{color:"black"}}><strong>Welcome To International Journal of Veterinary Science and <br/><br/>Agriculture Research, ISSN: 2582-4112</strong></h1>
      <p style={{color: "#3b3b3b"}}><strong>International Journal of Veterinary Science and Agriculture Research</strong>is an online 
      international peer reviewed open access journal which publishes original research papers. The 
      journal provides a common forum where all aspects of Agricultural and Veterinary Sciences are 
      presented. Its scope is broad and international, covering a wide range of research areas including: 
      anatomy, biochemistry, biotechnology, clinical medicine and surgery, Theriogenology, physiology,
       pharmacology, pathology, microbiology and immunology, parasitology, epidemiology, breeding and 
       genetic, feed and nutrition, Agricultural Engineering, Agricultural Genomics, Agronomy, Animal 
       Embryology, Animal Infectious Diseases, Animal Molecular Etiology, Animal Pathology, Animal 
       Virology, Crop Science, Ecology & Environment, Forestry, Genetic and Plant Breeding, Horticulture, 
       Hydrology, Irrigation, Livestock Anatomy and Histology, Livestock Parasitology, Medicinal Plants,
        Other Disciplines of Veterinary Science, Plant Biochemistry, Plant Biotechnology, wild life, animal
         products and their processing. Original research papers, review articles, extension articles, clinical 
         articles and short communications on the production and diseases of animals, including studies in
          comparative medicine is published in this journal.
          <br/>
          <br/>
      Only those manuscripts are considered for publication, the contents of which have not been
       published and are not being considered for publication in any other journal.
       <br/>
       <br/>
      <strong>IJVSAR </strong>is a highly-selective journal, covering topics that appeal to a broad readership of various 
      branches of Veterinary Science and Agriculture related fields.
      <br/>
      <br/>
      The core of the vision is sharing the innovative ideas and current trends in Veterinary Science and
       Agriculture. In every year majority of the research works get lost due to lack of effective scientific
        archival systems. It also provides a place for high opportunities for practitioners, corporate people,
         M.Phil student, PhD students to present ongoing research and development in their engineering
          areas. 
         <br/>
         <br/>
      International Journal of Veterinary Science and Agriculture Research approach on practical research 
      and having aims to establish a platform to the Researcher and Academician to all as aspects of 
      Veterinary Science and Agriculture importance.
      <br/>
      <br/>
      All manuscripts must be prepared in English and are subject to a rigorous and fair peer-review
       process. Accepted articles will immediately appear online.
      </p>
      </center>
     </div>
  )
}

export default Home;
