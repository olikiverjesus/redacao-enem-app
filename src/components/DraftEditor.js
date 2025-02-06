// src/components/DraftEditor.js
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";
import Test from "./ui/test";



const Paragraph = ({ text }) => {
  return (
    <Card className="mb-2 p-2">
      <CardContent>{text}</CardContent>
    </Card>
  );
};

const DraftEditor = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [inputText, setInputText] = useState("");
  const [savedDraft, setSavedDraft] = useState(null);

  const addParagraph = () => {
    if (inputText.trim()) {
      setParagraphs([...paragraphs, { id: uuidv4(), text: inputText }]);
      setInputText("");
    }
  };

  const saveDraft = () => {
    setSavedDraft(paragraphs);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Redação ENEM - Rascunho</h1>
      <Textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Digite seu parágrafo..."
        className="w-full mb-2"
      />
      <Button onClick={addParagraph} className="mb-2">Adicionar Parágrafo</Button>
      <Button onClick={saveDraft} className="ml-2 mb-4">Salvar Rascunho</Button>
      <h2 className="text-lg font-semibold mt-4">Texto Completo:</h2>
      <div className="mt-2">
        {paragraphs.map((para) => (
          <Paragraph key={para.id} text={para.text} />
        ))}
      </div>
      {savedDraft && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-semibold">Rascunho Salvo:</h2>
          {savedDraft.map((para) => (
            <Paragraph key={para.id} text={para.text} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DraftEditor;
