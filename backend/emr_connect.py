from flask import Blueprint, jsonify, request
import sqlite3

emr_connect_bp = Blueprint('emr', __name__)

@emr_connect_bp.route('/api/fetch_note', methods=['GET'])
def fetch_note():
    date = request.args.get('date')  # Get the 'date' query parameter
    print('Date:', date)  # Print the date

    conn = sqlite3.connect('database/datasource/my_database.db')
    conn.row_factory = sqlite3.Row  # This will allow you to access the rows as dictionaries
    cur = conn.cursor()

    query = """
    SELECT *
    FROM NOTEEVENTS
    WHERE DATE(CHARTDATE) = ? AND CATEGORY = 'Physician ' AND DESCRIPTION = 'Physician Resident Progress Note'
    ORDER BY STORETIME DESC
    LIMIT 1
    """

    cur.execute(query, (date,))
    row = cur.fetchone()
    cur.close()
    conn.close()

    if row is not None:
        row_as_dict = {description[0]: value for description, value in zip(cur.description, row)}
    else:
        row_as_dict = {}

    if row is not None:
        row_as_dict["note"] = "note! " + date  # Append the date to each note

    return jsonify(row_as_dict)
