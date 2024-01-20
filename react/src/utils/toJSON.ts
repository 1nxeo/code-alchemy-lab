// function for ReadableStream<Uint8Array> in Next 13 API route
/**
 * ! not working ! need to be fixed
 */

async function toJSON(body: ReadableStream<Uint8Array>) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  const chunks = [] as any[];

  async function read() {
    const { done, value } = await reader.read();

    // all chunks have been read?
    if (done) {
      return JSON.parse(chunks.join(""));
    }

    const chunk = decoder.decode(value, { stream: true });
    chunks.push(chunk);
    return read();
  }

  return read();
}
