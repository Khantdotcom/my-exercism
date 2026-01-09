//<reference path="./global.d.ts" />
//@ts-check

export class TranslationService {
  constructor(api) {
    this.api = api;
  }

  free(text) {
    return this.api.fetch(text).then((success) => success.translation);
  }

  batch(texts) {
    if (texts.length === 0) {
      return Promise.reject(new BatchIsEmpty());
    }
    return Promise.all(texts.map((text) => this.free(text)));
  }

  request(text) {
    const makeRequest = () => {
      return new Promise((resolve, reject) => {
        this.api.request(text, (error) => {
          if (error) return reject(error);
          resolve();
        });
      });
    };

    return makeRequest()
      .catch(() => makeRequest())
      .catch(() => makeRequest());
  }
  premium(text, minimumQuality) {
        return this.api
      .fetch(text)
      .catch(() => {
        return this.request(text).then(() => this.api.fetch(text));
      })
      .then((res) => {
        if (res.quality < minimumQuality)
          throw new QualityThresholdNotMet(text);
        return res.translation;
      });
  }
}

export class QualityThresholdNotMet extends Error {
  constructor(text) {
    super(`The translation of ${text} does not meet the requested quality threshold.`);
    this.text = text;
  }
}

export class BatchIsEmpty extends Error {
  constructor() {
    super(`Requested a batch translation, but there are no texts in the batch.`);
  }
}