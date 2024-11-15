// services/profileService.js

const calculateLitigantProfileCompletion = (litigant) => {
    const requiredFields = [
        'litigant_name',
        'profile_image',
        'litigant_state',
        'litigant_district',
        'litigant_gender',
        'litigant_dob',
        'litigant_mob',
        'litigant_email',
        'litigant_location',
        'litigant_password',
        'aadhar_document',
        'other_document',
        'litigant_preferred_language',
        'litigant_pincode',
    ];

    const missingFields = requiredFields.filter(field => !litigant[field]);
    const completionPercentage = ((requiredFields.length - missingFields.length) / requiredFields.length) * 100;
  
    return {
      completionPercentage,
      missingFields
    };
};

module.exports = calculateLitigantProfileCompletion;
