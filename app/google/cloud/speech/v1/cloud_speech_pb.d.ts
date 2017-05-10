// package: google.cloud.speech.v1
// file: google/cloud/speech/v1/cloud_speech.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";

export class RecognizeRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): RecognitionConfig | undefined;
  setConfig(value?: RecognitionConfig): void;

  hasAudio(): boolean;
  clearAudio(): void;
  getAudio(): RecognitionAudio | undefined;
  setAudio(value?: RecognitionAudio): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecognizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecognizeRequest): RecognizeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecognizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecognizeRequest;
  static deserializeBinaryFromReader(message: RecognizeRequest, reader: jspb.BinaryReader): RecognizeRequest;
}

export namespace RecognizeRequest {
  export type AsObject = {
    config?: RecognitionConfig.AsObject,
    audio?: RecognitionAudio.AsObject,
  }
}

export class LongRunningRecognizeRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): RecognitionConfig | undefined;
  setConfig(value?: RecognitionConfig): void;

  hasAudio(): boolean;
  clearAudio(): void;
  getAudio(): RecognitionAudio | undefined;
  setAudio(value?: RecognitionAudio): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LongRunningRecognizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LongRunningRecognizeRequest): LongRunningRecognizeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LongRunningRecognizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LongRunningRecognizeRequest;
  static deserializeBinaryFromReader(message: LongRunningRecognizeRequest, reader: jspb.BinaryReader): LongRunningRecognizeRequest;
}

export namespace LongRunningRecognizeRequest {
  export type AsObject = {
    config?: RecognitionConfig.AsObject,
    audio?: RecognitionAudio.AsObject,
  }
}

export class StreamingRecognizeRequest extends jspb.Message {
  hasStreamingConfig(): boolean;
  clearStreamingConfig(): void;
  getStreamingConfig(): StreamingRecognitionConfig | undefined;
  setStreamingConfig(value?: StreamingRecognitionConfig): void;

  hasAudioContent(): boolean;
  clearAudioContent(): void;
  getAudioContent(): Uint8Array | string;
  getAudioContent_asU8(): Uint8Array;
  getAudioContent_asB64(): string;
  setAudioContent(value: Uint8Array | string): void;

  getStreamingRequestCase(): StreamingRecognizeRequest.StreamingRequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingRecognizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingRecognizeRequest): StreamingRecognizeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamingRecognizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingRecognizeRequest;
  static deserializeBinaryFromReader(message: StreamingRecognizeRequest, reader: jspb.BinaryReader): StreamingRecognizeRequest;
}

export namespace StreamingRecognizeRequest {
  export type AsObject = {
    streamingConfig?: StreamingRecognitionConfig.AsObject,
    audioContent: Uint8Array | string,
  }

  export enum StreamingRequestCase {
    STREAMING_REQUEST_NOT_SET = 0,
    STREAMING_CONFIG = 1,
    AUDIO_CONTENT = 2,
  }
}

export class StreamingRecognitionConfig extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): RecognitionConfig | undefined;
  setConfig(value?: RecognitionConfig): void;

  getSingleUtterance(): boolean;
  setSingleUtterance(value: boolean): void;

  getInterimResults(): boolean;
  setInterimResults(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingRecognitionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingRecognitionConfig): StreamingRecognitionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamingRecognitionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingRecognitionConfig;
  static deserializeBinaryFromReader(message: StreamingRecognitionConfig, reader: jspb.BinaryReader): StreamingRecognitionConfig;
}

export namespace StreamingRecognitionConfig {
  export type AsObject = {
    config?: RecognitionConfig.AsObject,
    singleUtterance: boolean,
    interimResults: boolean,
  }
}

export class RecognitionConfig extends jspb.Message {
  getEncoding(): RecognitionConfig.AudioEncoding;
  setEncoding(value: RecognitionConfig.AudioEncoding): void;

  getSampleRateHertz(): number;
  setSampleRateHertz(value: number): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getMaxAlternatives(): number;
  setMaxAlternatives(value: number): void;

  getProfanityFilter(): boolean;
  setProfanityFilter(value: boolean): void;

  clearSpeechContextsList(): void;
  getSpeechContextsList(): Array<SpeechContext>;
  setSpeechContextsList(value: Array<SpeechContext>): void;
  addSpeechContexts(value?: SpeechContext, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecognitionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RecognitionConfig): RecognitionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecognitionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecognitionConfig;
  static deserializeBinaryFromReader(message: RecognitionConfig, reader: jspb.BinaryReader): RecognitionConfig;
}

export namespace RecognitionConfig {
  export type AsObject = {
    encoding: RecognitionConfig.AudioEncoding,
    sampleRateHertz: number,
    languageCode: string,
    maxAlternatives: number,
    profanityFilter: boolean,
    speechContextsList: Array<SpeechContext.AsObject>,
  }

  export enum AudioEncoding {
    ENCODING_UNSPECIFIED = 0,
    LINEAR16 = 1,
    FLAC = 2,
    MULAW = 3,
    AMR = 4,
    AMR_WB = 5,
    OGG_OPUS = 6,
    SPEEX_WITH_HEADER_BYTE = 7,
  }
}

export class SpeechContext extends jspb.Message {
  clearPhrasesList(): void;
  getPhrasesList(): Array<string>;
  setPhrasesList(value: Array<string>): void;
  addPhrases(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechContext.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechContext): SpeechContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpeechContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechContext;
  static deserializeBinaryFromReader(message: SpeechContext, reader: jspb.BinaryReader): SpeechContext;
}

export namespace SpeechContext {
  export type AsObject = {
    phrasesList: Array<string>,
  }
}

export class RecognitionAudio extends jspb.Message {
  hasContent(): boolean;
  clearContent(): void;
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  hasUri(): boolean;
  clearUri(): void;
  getUri(): string;
  setUri(value: string): void;

  getAudioSourceCase(): RecognitionAudio.AudioSourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecognitionAudio.AsObject;
  static toObject(includeInstance: boolean, msg: RecognitionAudio): RecognitionAudio.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecognitionAudio, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecognitionAudio;
  static deserializeBinaryFromReader(message: RecognitionAudio, reader: jspb.BinaryReader): RecognitionAudio;
}

export namespace RecognitionAudio {
  export type AsObject = {
    content: Uint8Array | string,
    uri: string,
  }

  export enum AudioSourceCase {
    AUDIO_SOURCE_NOT_SET = 0,
    CONTENT = 1,
    URI = 2,
  }
}

export class RecognizeResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<SpeechRecognitionResult>;
  setResultsList(value: Array<SpeechRecognitionResult>): void;
  addResults(value?: SpeechRecognitionResult, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecognizeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecognizeResponse): RecognizeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecognizeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecognizeResponse;
  static deserializeBinaryFromReader(message: RecognizeResponse, reader: jspb.BinaryReader): RecognizeResponse;
}

export namespace RecognizeResponse {
  export type AsObject = {
    resultsList: Array<SpeechRecognitionResult.AsObject>,
  }
}

export class LongRunningRecognizeResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<SpeechRecognitionResult>;
  setResultsList(value: Array<SpeechRecognitionResult>): void;
  addResults(value?: SpeechRecognitionResult, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LongRunningRecognizeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LongRunningRecognizeResponse): LongRunningRecognizeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LongRunningRecognizeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LongRunningRecognizeResponse;
  static deserializeBinaryFromReader(message: LongRunningRecognizeResponse, reader: jspb.BinaryReader): LongRunningRecognizeResponse;
}

export namespace LongRunningRecognizeResponse {
  export type AsObject = {
    resultsList: Array<SpeechRecognitionResult.AsObject>,
  }
}

export class LongRunningRecognizeMetadata extends jspb.Message {
  getProgressPercent(): number;
  setProgressPercent(value: number): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastUpdateTime(): boolean;
  clearLastUpdateTime(): void;
  getLastUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LongRunningRecognizeMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LongRunningRecognizeMetadata): LongRunningRecognizeMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LongRunningRecognizeMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LongRunningRecognizeMetadata;
  static deserializeBinaryFromReader(message: LongRunningRecognizeMetadata, reader: jspb.BinaryReader): LongRunningRecognizeMetadata;
}

export namespace LongRunningRecognizeMetadata {
  export type AsObject = {
    progressPercent: number,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class StreamingRecognizeResponse extends jspb.Message {
  hasError(): boolean;
  clearError(): void;
  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<StreamingRecognitionResult>;
  setResultsList(value: Array<StreamingRecognitionResult>): void;
  addResults(value?: StreamingRecognitionResult, index?: number): void;

  getSpeechEventType(): StreamingRecognizeResponse.SpeechEventType;
  setSpeechEventType(value: StreamingRecognizeResponse.SpeechEventType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingRecognizeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingRecognizeResponse): StreamingRecognizeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamingRecognizeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingRecognizeResponse;
  static deserializeBinaryFromReader(message: StreamingRecognizeResponse, reader: jspb.BinaryReader): StreamingRecognizeResponse;
}

export namespace StreamingRecognizeResponse {
  export type AsObject = {
    error?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<StreamingRecognitionResult.AsObject>,
    speechEventType: StreamingRecognizeResponse.SpeechEventType,
  }

  export enum SpeechEventType {
    SPEECH_EVENT_UNSPECIFIED = 0,
    END_OF_SINGLE_UTTERANCE = 1,
  }
}

export class StreamingRecognitionResult extends jspb.Message {
  clearAlternativesList(): void;
  getAlternativesList(): Array<SpeechRecognitionAlternative>;
  setAlternativesList(value: Array<SpeechRecognitionAlternative>): void;
  addAlternatives(value?: SpeechRecognitionAlternative, index?: number): void;

  getIsFinal(): boolean;
  setIsFinal(value: boolean): void;

  getStability(): number;
  setStability(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingRecognitionResult.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingRecognitionResult): StreamingRecognitionResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamingRecognitionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingRecognitionResult;
  static deserializeBinaryFromReader(message: StreamingRecognitionResult, reader: jspb.BinaryReader): StreamingRecognitionResult;
}

export namespace StreamingRecognitionResult {
  export type AsObject = {
    alternativesList: Array<SpeechRecognitionAlternative.AsObject>,
    isFinal: boolean,
    stability: number,
  }
}

export class SpeechRecognitionResult extends jspb.Message {
  clearAlternativesList(): void;
  getAlternativesList(): Array<SpeechRecognitionAlternative>;
  setAlternativesList(value: Array<SpeechRecognitionAlternative>): void;
  addAlternatives(value?: SpeechRecognitionAlternative, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechRecognitionResult.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechRecognitionResult): SpeechRecognitionResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpeechRecognitionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechRecognitionResult;
  static deserializeBinaryFromReader(message: SpeechRecognitionResult, reader: jspb.BinaryReader): SpeechRecognitionResult;
}

export namespace SpeechRecognitionResult {
  export type AsObject = {
    alternativesList: Array<SpeechRecognitionAlternative.AsObject>,
  }
}

export class SpeechRecognitionAlternative extends jspb.Message {
  getTranscript(): string;
  setTranscript(value: string): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechRecognitionAlternative.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechRecognitionAlternative): SpeechRecognitionAlternative.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpeechRecognitionAlternative, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechRecognitionAlternative;
  static deserializeBinaryFromReader(message: SpeechRecognitionAlternative, reader: jspb.BinaryReader): SpeechRecognitionAlternative;
}

export namespace SpeechRecognitionAlternative {
  export type AsObject = {
    transcript: string,
    confidence: number,
  }
}

