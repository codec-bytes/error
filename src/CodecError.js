import { ValueError } from '@aureooms/js-error' ;

export class CodecError extends ValueError {

	constructor ( encoding , reason , object , start , end ) {

		super( reason ) ;

		this.encoding = encoding ;
		this.reason = reason.toString() ;
		this.object = object ;
		this.start = start ;
		this.end = end ;

	}

}
