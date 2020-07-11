import React, { FunctionComponent, useState, useEffect } from 'react';
import './type-writer.styles.scss';

interface TypeWriterParams {
  leadingFixedText: string;
  waitTime: number;
  phrases: string[];
}

const TypeWriter: FunctionComponent<TypeWriterParams> = ({
  leadingFixedText,
  waitTime,
  phrases,
}) => {
  const [typingState, setTypingState] = useState({
    currentTypedText: '',
    currentPhraseIdx: 0,
    isDeleting: false,
    inPause: false,
  });

  const typeNextCharFunction = (currentPhrase: string) => {
    if (typingState.currentTypedText === currentPhrase) {
      setTypingState({ ...typingState, inPause: true });
    } else {
      const currentTypedLength = typingState.currentTypedText.length;
      const newTypedText = currentPhrase.substr(0, currentTypedLength + 1);
      setTypingState({
        ...typingState,
        currentTypedText: newTypedText,
      });
    }
  };

  const deletePrevTypedCharFunction = (currentPhrase: string) => {
    if (!typingState.currentTypedText) {
      setTypingState({
        ...typingState,
        currentPhraseIdx: (typingState.currentPhraseIdx + 1) % phrases.length,
        isDeleting: false,
      });
    } else {
      const currentTypedLength = typingState.currentTypedText.length;
      const newTypedText = currentPhrase.substr(0, currentTypedLength - 1);
      setTypingState({
        ...typingState,
        currentTypedText: newTypedText,
      });
    }
  };

  const typingFunction = (): NodeJS.Timeout => {
    return setTimeout(() => {
      const currentPhrase = phrases[typingState.currentPhraseIdx];

      if (typingState.isDeleting) {
        deletePrevTypedCharFunction(currentPhrase);
      } else {
        typeNextCharFunction(currentPhrase);
      }
    }, 300 / (typingState.isDeleting ? 3 : 1));
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout = null;
    if (!typingState.inPause) {
      timeout = typingFunction();
    } else {
      timeout = setTimeout(
        () =>
          setTypingState({ ...typingState, isDeleting: true, inPause: false }),
        waitTime
      );
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [typingState]);

  return (
    <div className="type-writer">
      <h1>
        <span className="text">
          {leadingFixedText} {typingState.currentTypedText}
        </span>
      </h1>
    </div>
  );
};

export default TypeWriter;
