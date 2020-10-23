import React from "react";
import { Card } from "react-bootstrap";
import Iframe from 'react-iframe';


const PatView = (props) => {

  console.log(props);
  //const { isAuthenticated } = useAuth0();
  
  return (
    <Card style={{ width: "100%" }}>

      <Card.Body>
        <Iframe
            url={getCorpus(props.pat.express)}
            width="100%"
            height="1000px"
            className="size"
            display="initial"
            postion="relative"
        />
      </Card.Body>
    </Card>
  );
}

function getCorpus(pat){

  const id = pat.id
  
  if (pat.patentCorpus === "USPAT"){
    //return("http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1="+id+".PN.&OS=PN/"+id+"&RS=PN/"+id);
    return("https://pdfpiw.uspto.gov/"+id.substring(6, 8)+"/"+id.substring(3, 6)+"/"+id.substring(0, 3)+"/1.pdf")
  }else if (pat.patentCorpus === "PGPUB"){
    return("http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1="+id+".PGNR.&OS=DN/"+id+"&RS=DN/"+id);
  }
}

export default PatView;
