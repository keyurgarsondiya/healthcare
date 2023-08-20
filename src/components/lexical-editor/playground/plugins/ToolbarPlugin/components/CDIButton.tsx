import { FORMAT_TEXT_COMMAND } from 'lexical';
import React from 'react';
import { useContext } from 'react';
import { IS_APPLE } from '../../../shared/src/environment';
import EditorContext from '../../../context/EditorContext';
import ToolbarContext from '../../../context/ToolbarContext';
import { useTranslation } from 'react-i18next';

import { REPLACE_TEXT_WITH_API_CALL_COMMAND } from '../../../commands/custom-commands';

const CDIButton = () => {
  const { activeEditor } = useContext(EditorContext);
  const { isBold } = useContext(ToolbarContext);
  const { t } = useTranslation('toolbar');

  return (
    <button
      onClick={() => {
        activeEditor.dispatchCommand(REPLACE_TEXT_WITH_API_CALL_COMMAND, '');
      }}
      className={'toolbar-item spaced ' + (isBold ? 'active' : '')}
      title={
        IS_APPLE
          ? `${t('toolbar:CDIButton.Title')} (⌘B)`
          : `${t('toolbar:CDIButton.Title')} (Ctrl + B)`
      }
      aria-label={`${t('toolbar:CDIButton.Description')} ${
        IS_APPLE ? '⌘B' : 'Ctrl+B'
      }`}
      type="button"
    >
      <i className="format stars" />
    </button>
  );
};

export default CDIButton;
