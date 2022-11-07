import {LRLanguage, LanguageSupport} from '@codemirror/language';
import {styleTags, tags as t} from '@lezer/highlight';
import {parser} from './lang';


export const complexLang = LRLanguage.define({
    parser: parser.configure({
        props: [
            styleTags({
                Identifier: t.keyword,
                Annotation: t.annotation,
                Flag: t.string,
                Operator: t.operatorKeyword,
                Number: t.number,
                Comment: t.comment,
            }),
        ],
    }),
});

export function complex() {
    return new LanguageSupport(complexLang);
}
