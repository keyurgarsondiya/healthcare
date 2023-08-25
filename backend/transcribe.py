import sys
import os
# Note: you need to be using OpenAI Python v0.27.0 for the code below to work
import openai
from dotenv import load_dotenv


#load environment variables
load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")


def transcribe(file_path):
    # Replace the following line with your transcription logic
    audio_file= open(file_path, "rb")
    prompt = ""
    # prompt = "this is a transcription for medical dictation. Identify and transcribe medical words."
    transcript = openai.Audio.transcribe(model = "whisper-1", file = audio_file, prompt = prompt, language = "en")
#     transcription_result = f"{file_path}"
    return transcript

if __name__ == '__main__':
    if len(sys.argv) > 1:
        print(transcribe(sys.argv[1]))
