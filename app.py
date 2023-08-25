from flask import Flask, request, jsonify  
from flask_cors import CORS  
import os  
import glob  
import json  
# from werkzeug.utils import secure_filename 
from datetime import datetime
from pydub import AudioSegment
  
# from backend.open_ai_chatbot import run_prompts  
  
app = Flask(__name__)  
CORS(app, resources={r"*": {"origins": "*"}})  

UPLOAD_FOLDER = 'database/uploads/'  
ALLOWED_EXTENSIONS = {'webm'} 

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER 

def allowed_file(filename):  
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS  

def transcribe_audio(file_path):
    
    try:
        # # Run the transcribe.py script on the saved file
        # transcription_result_json = subprocess.check_output(["python", "backend/transcribe.py", file_path], text=True)
        # print(transcription_result_json)
        # # Parse the JSON response and extract the transcription text
        # transcription_json = json.loads(transcription_result_json)
        # transcription = transcription_json["text"]
        # # transcription = proof_read_radiology(transcription)
        transcription = f"This is a test transcription for {file_path}"
        return transcription
    
    except Exception as e:
        print(f'Transcription failed with exception: {e}')
        return f'Transcription failed: {str(e)}'
  
def fetch_patients_list(user_id, date):  
    # Implement your logic to fetch the patient list for a given user_id and date.  
    # For now, we'll use a stand-in list of patients.  
    patient_list = [  
        {  
            "patient_name": "Tom Smith",  
            "mrn": "987654321",  
            "dob": "1970-01-01"  
        },  
        {  
            "patient_name": "Jane Doe",  
            "mrn": "123456789",  
            "dob": "1980-12-31"  
        },  
        {  
            "patient_name": "John Miller",  
            "mrn": "111222333",  
            "dob": "1990-06-15"  
        }  
    ]  
    return patient_list

@app.route('/upload-audio', methods=['POST'])  
def upload_audio():  
    print("upload_audio")
    if 'audio' not in request.files:  
        print("audio not in request.files")
        return jsonify({'message': 'No audio file found'}), 400  

    audio = request.files['audio']  
    if audio.filename == '':  
        print("audio.filename == ''")
        return jsonify({'message': 'No audio file found'}), 400  

    if audio:  
        current_time = datetime.now().strftime("%Y%m%d-%H%M%S")
        filename = secure_filename(f"{current_time}-{audio.filename}")  
        audio_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        audio.save(audio_path) 

        # Convert audio to mp3
        audio_file = AudioSegment.from_file(audio_path)
        mp3_filename = f"{os.path.splitext(filename)[0]}.mp3"
        mp3_path = os.path.join(app.config['UPLOAD_FOLDER'], mp3_filename)
        audio_file.export(mp3_path, format="mp3")

        print("audio saved") 
        transcription = transcribe_audio(mp3_path)
        print(f"transcription: {transcription}")
        return jsonify({'message': transcription}), 200  
    else:  
        return jsonify({'message': 'Invalid file format'}), 400 
  
@app.route('/get-slash-prompts', methods=['GET'])  
def get_prompts():  
    try:  
        # json_files = glob.glob('database/prompts/*.json')  
        # file_data = []  
        # for file in json_files:  
        #     with open(file, 'r') as f:  
        #         data = json.load(f)  
        #         filename = data.get('filename')  
        #         icon_path = data.get('icon_path')  
        #         if filename and icon_path:  
        #             file_data.append({'filename': filename, 'icon_path': icon_path})  
        file_data = [
            {
                "filename": "prompt1",
                "icon_path": "icons/prompt1.png"
            },
            {
                "filename": "prompt2",
                "icon_path": "icons/prompt1.png"
            },
            {
                "filename": "prompt3",
                "icon_path": "icons/prompt1.png"
            }
        ]
        return jsonify({'file_data': file_data}), 200  
    except Exception as e:  
        print(e)  
        return jsonify({'message': 'Error fetching prompts'}), 500  
  
  
@app.route('/api/send-prompt', methods=['POST'])
def send_prompt():
    # Check if the required keys are present in the request
    if not request.json or 'promptName' not in request.json or 'text' not in request.json:
        return jsonify({'message': 'Missing promptName or text in the request'}), 400

    prompt_name = request.json['promptName']
    input_text = request.json['text']

    try:
        # If you want to use the reading functionality, uncomment and adjust the following lines
        # with open(f'database/prompts/{prompt_name}.json', 'r') as f:
        #     prompt_data = json.load(f)
        # output = run_prompts(prompt_data, input_text)

        output = "<h1>This is the response generated by the API call.</h1>"
        return jsonify({'output': output}), 200
    except Exception as e:
        print(e)
        return jsonify({'message': 'Error fetching prompt', 'error': str(e)}), 500

  
  
@app.route('/get-patients', methods=['POST'])  
def get_patients():  
    try:  
        user_id = request.json.get('user_id', None)  
        date = request.json.get('date', None)  
  
        if not user_id or not date:  
            return jsonify({'message': 'Error, missing user_id or date parameter'}), 400  
  
        patient_list = fetch_patients_list(user_id, date)  

        return jsonify({'patient_list': patient_list}), 200  
    except Exception as e:  
        print(e)  
        return jsonify({'message': 'Error fetching patient list'}), 500  
  
  
if __name__ == '__main__':  
    app.run(debug=True, host='localhost', port=5000)  
