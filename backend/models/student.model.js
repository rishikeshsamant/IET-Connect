import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    rollno: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['student'],
      default: 'student',
    },
  },
  { timestamps: true }
);

studentSchema.pre("save", function (next) {
  if (this.rollno) {
    this.rollno = this.rollno.toUpperCase();
  }
  next();
});

const Student = mongoose.model('Student', studentSchema);

export default Student;