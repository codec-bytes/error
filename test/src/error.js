import test from 'ava' ;

import { ValueError } from '@aureooms/js-error' ;

import {
	CodecError ,
	EncodeError ,
	DecodeError ,
	TranslateError ,
} from '../../src' ;

function macro ( t , MyCodecError ) {

	const encoding = Math.random().toString() ;
	const reason = Math.random();
	const reasonstring = reason.toString();
	const object = Math.random() ;
	const start = Math.random() ;
	const end = Math.random() ;

	const myerror = new MyCodecError( encoding , reason , object , start , end ) ;

	t.truthy( myerror ) ;

	t.true( myerror instanceof ValueError ) ;

	t.true( myerror instanceof CodecError ) ;

	t.is( myerror.encoding , encoding ) ;
	t.is( myerror.reason , reasonstring ) ;
	t.is( myerror.message , myerror.reason ) ;
	t.is( myerror.object , object ) ;
	t.is( myerror.start , start ) ;
	t.is( myerror.end , end ) ;

}

macro.title = ( _ , MyCodecError ) => `${MyCodecError}` ;

test( macro , CodecError ) ;
test( macro , EncodeError ) ;
test( macro , DecodeError ) ;
test( macro , TranslateError ) ;
