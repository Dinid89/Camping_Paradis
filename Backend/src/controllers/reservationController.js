const db = require("../config/db");

//Recupere toutes les reservations
const getAllReservation = (req, res) => {
  const sql = "SELECT * FROM reservations";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Erreur Serveur" });
    }
    return res.status(200).json(result);
  });
};

//Recupere une reservation par ID
const getReservationByUser = (req, res) => {
  const id = req.user.id;
  const sql = "SELECT * FROM reservations WHERE user_id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Erreur Serveur" });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Aucune réservation trouvée" });
    }
    return res.status(200).json(result);
  });
};

//Creation d'une reservation
const createReservation = (req, res) => {
  const { hebergement_id, date_debut, date_fin } = req.body;
  const id = req.user.id;

  //Verifier disponibiltés
  const sqlCheck = `SELECT * FROM reservations WHERE hebergement_id = ? AND statut != 'annulée' AND date_debut < ? AND date_fin > ?`;
  db.query(sqlCheck, [hebergement_id, date_fin, date_debut], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
    if (result.length > 0) {
      return res
        .status(409)
        .json({ message: "Hebergement non disponible sur cette période" });
    }

    //Créer la réservation
    const sql =
      "INSERT INTO reservations (hebergement_id, date_debut, date_fin, user_id) VALUES (?, ?, ?, ?)";
    db.query(sql, [hebergement_id, date_debut, date_fin, id], (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Erreur Serveur" });
      }
      res.status(201).json({ message: "Réservation créée   avec succès" });
    });
  });
};

//modifier une reservation
const updateReservation = (req, res) => {
  const id = req.params.id;
  const { statut } = req.body; // modif satuts
  const sql = "UPDATE reservations SET statut = ? WHERE id = ?";
  db.query(sql, [statut, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
    res.status(200).json({ message: "Réservation modifiée avec succès" });
  });
};

//supprimer une reservation
const deleteReservation = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM reservations WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
    res.status(204).send();
  });
};

module.exports = {
  getAllReservation,
  getReservationByUser,
  createReservation,
  updateReservation,
  deleteReservation,
};
