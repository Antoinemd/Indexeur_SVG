<?xml version="1.0" encoding="UTF-8"?>

<!-- La racine -->
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/2000/svg">

<!-- Le format de sortie -->
<xsl:output method="text" encoding="UTF-8" indent="yes" ></xsl:output>



<xsl:template match="/">
	{
		"_nom_image" : "",
		"formes" : 
		[
		<xsl:apply-templates select="svg"/>
		]
	}	
	
</xsl:template>

<!-- Template correspondant aux formes qui est appelé plus haut dans celui des images -->
<!-- La condition if test sibling s'assure de la bonne position de la virgule quand il y a plusieurs éléments-->
<!-- Local-name(.) récupère le nom de la balise et le select . applique le template lui correspondant-->
<!-- Dans le cas où nous voudrions traiter plus de paramètres (taille, position..), il suffit d'éditer les templates correspondants -->
<xsl:template match="svg">
	<xsl:for-each select="//rect|//circle|//ellipse|//line|//polyline|//polygon">
	{
	"genre" : "<xsl:value-of select="local-name(.)" />",
	<xsl:apply-templates select="."/>
	}
	<xsl:if test="./following-sibling::rect|./following-sibling::circle|./following-sibling::ellipse|./following-sibling::line|./following-sibling::polyline|./following-sibling::polygon">,</xsl:if>
	</xsl:for-each>
</xsl:template>

<xsl:template match="rect">
	"couleur" : "<xsl:value-of select="@fill"/>"
</xsl:template>

<xsl:template match="circle"> 	
    "couleur" : "<xsl:value-of select="@fill"/>"
</xsl:template>

<xsl:template match="ellipse">
	"couleur" : "<xsl:value-of select="@fill"/>"
</xsl:template>

<xsl:template match="line">	
  	"couleur" : "<xsl:value-of select="@fill"/>"
</xsl:template>

<xsl:template match="polyline">
	"couleur" : "<xsl:value-of select="@fill"/>"
</xsl:template>

<xsl:template match="polygon">
	"couleur" : "<xsl:value-of select="@fill"/>"
</xsl:template>


</xsl:stylesheet>


