import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    // name: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    rollno: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
      match: /^\d{2}[A-Z]{3}\d{2}$/, 
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

    resetCode: {
      type: String,
      default: null,
    },
    resetCodeExpiry: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);


studentSchema.pre('save', function (next) {
  if (this.rollno) {
    this.rollno = this.rollno.toUpperCase();
  }
  next();
});

const Student = mongoose.model('Student', studentSchema);
export default Student;
