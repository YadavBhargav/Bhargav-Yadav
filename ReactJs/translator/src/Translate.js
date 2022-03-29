import React, { useState, useEffect } from "react";
import { Form, TextArea, Button, Icon } from "semantic-ui-react";
import axios from "axios";
function Translate() {
  const [inputText, setInputText] = useState("");
  const [detectLanguageKey, setdetectedLanguageKey] = useState("en");
  const [selectedLanguageKey, setLanguageKey] = useState("");
  const [resultText, setResultText] = useState("");
  const [languageList, setLanguageList] = useState([]);


  const getLanguageSource = () => {
    
      axios
        .post(`https://libretranslate.de/detect`, {
          q: inputText,
        })
        .then((response) => {
          setdetectedLanguageKey(response.data[0].language);
        });
  };

  useEffect(() => {
    axios.get(`https://libretranslate.de/languages`).then((response) => {
      setLanguageList(response.data);
    });
  });

  const languageKey = (selectedLanguage) => {
    setLanguageKey(selectedLanguage.target.value);
  };

  const translateText = () => {
    getLanguageSource();

    let data = {
        q : inputText,
        source: detectLanguageKey,
        target: selectedLanguageKey

    }

    console.log(detectLanguageKey);
    console.log(selectedLanguageKey);

    axios.post(`https://libretranslate.de/translate`, data)
    .then((response) => {
        setResultText(response.data.translatedText)
    })
}

  return (
    <div>
      <div className="app-header">
        <h2 className="header">Text Translator</h2>
      </div>

      <div className="app-body">
        <div>
          <Form>
            <Form.Field
              control={TextArea}
              placeholder="Type text to translate"
              onChange={(e) => setInputText(e.target.value)}
            />

            <select className="language-select" onChange={languageKey}>
              <option>Please Select Language...</option>
              {languageList.map((language) => {
                return <option value={language.code}>{language.name}</option>;
              })}
            </select>
            <br />

            <Form.Field
              control={TextArea}
              placeholder="Your Result Translation.."
              value={resultText}
            />

            <Button color="orange" size="large" onClick={translateText}>
              Translate
              <Icon name="translate" />
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Translate;
