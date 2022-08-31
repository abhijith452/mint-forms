import React, { useState, useEffect } from 'react'
import { EditorState } from 'draft-js';
import { stateToHTML } from "draft-js-export-html";
import { ContentState } from 'draft-js';
const htmlToDraft = typeof window === 'object' && require('html-to-draftjs').default;
import dynamic from 'next/dynamic';
const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(mod => mod.Editor),
    { ssr: false }
)
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function RichEditor({ label, state, setState, ...rest}) {


    const blocksFromHtml = htmlToDraft(state);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);

    const [editorState, setEditorState] = useState(
        () => {

            return EditorState.createWithContent(contentState)

        }
    );

    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
    }

    const convertContentToHTML = () => {
        setState(stateToHTML(editorState.getCurrentContent()));

    }

    useEffect(() => {
        if (state === "") {
            setEditorState(EditorState.createEmpty());
        }

    }, [state])

    return (
        <div className="services_editor">
            <h6 className="services_label">{label}</h6>
            <Editor
                editorState={editorState}
                // wrapperClassName="services_editor_wrapper"
                // editorClassName="services_editor_editor"
                toolbarClassName="services_editor_toolbar"
                onEditorStateChange={handleEditorChange}
                {...rest}
                toolbar={{
                    options: ['inline', 'blockType', 'fontSize', 'link', 'list', 'textAlign', 'history'],

                }}
            />
        </div>
    )
}
