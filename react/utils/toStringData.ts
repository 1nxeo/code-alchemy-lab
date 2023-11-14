// function for ReadableStream<Uint8Array> in Next 13 API route

async function toStringData(body: ReadableStream<Uint8Array>) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let result = "";

  async function read() {
    const { done, value } = await reader.read();

    if (done) {
      return result;
    }

    const chunk = decoder.decode(value, { stream: true });
    result += chunk;
    return read();
  }

  return read();
}
